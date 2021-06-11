Rails.application.routes.draw do
  
  
  namespace :api do
    root 'home#index'

    post '/login',    to:'sessions#create'
    post '/logout',   to:'sessions#destroy'
    get '/logged_in',  to: 'sessions#is_logged_in?'

    resources :favourites, only: [:create, :show, :index]
    resources :comments, only: [:create, :show, :index]
    resources :burgerlikes, only: [:create, :show, :index]
    
    
    resources :users, only: [:create, :show, :index] do
      resources :items, only: [:create, :show, :index, :destroy]
    end
    get '/extburgers' => "external_burgers#get_external_burgers"
  end


  #resources external_burgers


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
