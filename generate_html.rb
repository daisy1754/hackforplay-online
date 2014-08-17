#!bin/ruby
require 'erb'
require 'i18n-translate'

I18n::Backend::Simple.send(:include, I18n::Backend::Translate)
I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
I18n.available_locales = [:ja, :en]
I18n.enforce_available_locales = true
I18n.default_locale = 'en'
I18n.load_path << Dir["i18n/*.yml"]

Dir.foreach('template') do |item|
  next unless item.end_with? "erb"
  template = ERB.new(File.open("#{File.dirname(__FILE__)}/template/#{item}").read)
  I18n.available_locales.each do |locale|
    I18n.locale = locale
    File.open("#{File.dirname(__FILE__)}/public/#{locale}/#{item.slice(0, item.length - 4)}", "w") do |f|
      f.write template.result
    end
  end
end
