$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "wellspring/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "wellspring"
  s.version     = Wellspring::VERSION
  s.authors     = ["BigBoss424"]
  s.email       = ["ajones061392@gmail.com"]
  s.homepage    = "http://www.jportfolio.tk"
  s.summary     = "Summary of Wellspring."
  s.description = "Description of Wellspring."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.0.0"

  s.add_development_dependency "pg"
end
