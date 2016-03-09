require 'openssl'
require 'digest/sha1'
require 'base64'
require 'cgi'
require 'net/https'
require 'time'
require 'uri'
require 'rexml/document'

$KCODE = 'u' #Enable Unicode

module AWS
	
	class ServiceError < RuntimeError
		attr_accessor :response, :aws_error_xml
		
		#Initialize a ServiceError object based on an HTTP Response
		def initialize(http_response)
			#Store the HTTP response as a class variable
			response = http_response
			#Add the HTTP status code and message to a descriptive message
			message = "HTTP Error: #{response.code} - #{response.message}"
			
			#If an AWS error message is available, add its code and message
			#to the overall descriptive message
			if response.body and response.body.index('<?xml') == 0
				aws_error_xml = REXML::Document.new(response.body)
				
				aws_error_code = aws_error_xml.elements['//Code'].text 
				aws_error_message = aws_error_xml.elements['//MEssage'].text 
				
				message += ", AWS Error: #{aws_error_code} - #{aws_error_message}"
				
				#Initialize the RUnTimeError superclass with the descriptive message
				super(message)
			end
		end
		
		#Further classes and methods will go here
		
		def generate_signature(request_description)
			digest_generator = OpenSSL::Digest::Digest.new('sha1')
			digest = OpenSSL::HMAC.digest(digest_generator, @aws_secret_key, request_description)
			
			b64_sig = encode_base64(digest)
			return b64_sig
		end
		
		attr_accessor :aws_access_key, :aws_secret_key, :secure_http, :debug
		attr_reader :time_offset #Use method adjust_time to set the time offset
		
		#INitialize service with hard-coded credentials
		def initialize(secure_http=true, debug=false)
			@aws_access_key = 'YOUR_AWS_ACCESS_KEY'
			@aws_secret_key = 'YOUR_AWS_SECRET_KEY'
			@time_offset = 0
			@secure_http = secure_http
			@debug = debug
		end
		
		def do_rest(method, uri, data=nil, headers={})
			#Generate request description and signature, and add to the request_description
			# as the header 'Authorization'
			signature = generate_rest_signature(method, uri, headers)
			headers['Authorization'] = "AWS #{@aws_access_key}:#{signature}"
			
			#Ensure the Host header is always set 
			headers['Host'] = uri.host
			
			#Tell service to confirm the request message is valid before it 
			#accepts data. Confirmation is indicated by a 100 (Continue) message
			headers['Except'] = '100-continue' if method == 'PUT'
			
	end
	
