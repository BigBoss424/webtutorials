require 'AWS'
require 'digest/md5'

class S3
	include AWS #Include the AWS module as a mixin
	
	S3_ENDPOINT = "s3.amazonaws.com"
	XMLNS = 'http://s3.amazonaws.com/doc/2006-03-01/'
	
	#S3 API Implementation methods will go here...
end