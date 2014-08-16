require 'sinatra'

set :public_folder, "#{File.dirname(__FILE__)}/static"

get '/' do
  redirect '/hack-for-play/index.html'
end
