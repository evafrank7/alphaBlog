class ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id]) # Params Hash contains the :id
  end

  def index
    @articles = Article.all
  end
  
  def new
    @article = Article.new
  end

end