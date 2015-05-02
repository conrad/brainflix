Rails.application.routes.draw do
  get '/:id/start/:url', to: 'api#start'
  get '/:id/stop/:url', to: 'api#stop'
  get '/:id/get/:url'
end
