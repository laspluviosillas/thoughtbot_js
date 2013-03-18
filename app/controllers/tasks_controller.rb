class TasksController < ApplicationController

  respond_to :html, :json

  def index
    respond_with(@tasks = Task.all)
  end

  def create
    @task = Task.new(params[:task])
    @task.save
    respond_with @task
  end

end