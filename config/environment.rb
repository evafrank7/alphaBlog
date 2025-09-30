# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Custom error field rendering to avoid wrapping fields with errors in a div
# This prevents breaking the layout when there are validation errors
ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
    html_tag.html_safe
  end