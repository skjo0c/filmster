class ReviewsController < ApplicationController
	before_action :authenticate_user!

	def create
		@movie = MovieBuilder.new(imdbid: params[:imdbid]).build!

		#connect review and movie
		@review = current_user.reviews.new(review_params.merge(movie: @movie))

		if @review.save
			flash[:success] = "Review Saved!"
			redirect_to root_path
		else
			flash[:alert] = "Woops! There seems to be some problem. Please try again!"
			redirect_to root_path
		end
	end
 private

  def review_params
    params.require(:review).permit(:comment)
  end
end
