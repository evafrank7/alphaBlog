class ApplicationController < ActionController::Base
    def home
        render html: "Hello, Rails!"
    end 
end
