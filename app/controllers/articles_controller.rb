class ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id]) # Params Hash contains the :id
  end
end