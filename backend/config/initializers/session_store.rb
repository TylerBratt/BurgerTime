# Be sure to restart your server when you modify this file.

Rails.application.config.session_store :cookie_store, key: '_backend_session'

if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_BurgerTime', domain: 'BurgerTimeAPI'
else
  Rails.application.config.session_store :cookie_store, key: '_BurgerTime'

end
