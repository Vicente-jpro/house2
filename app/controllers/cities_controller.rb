class CitiesController < ApplicationController
  def index
    @cities = if params[:province_id].present?
                City.where(province_id: params[:province_id])
              else
                City.none
              end

    respond_to do |format|
      format.html
      format.turbo_stream { render turbo_stream: turbo_stream.update("city_select", partial: "cities/city_options", locals: { cities: @cities }) }
    end
  end

  def province 
    province = Province.new 
    province.id = params[:id]
    @cities = City.find_cities(province)
    render json: @cities
  end
end
