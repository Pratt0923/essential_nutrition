Rails.application.routes.draw do
  get 'aboutus', to: 'welcome#aboutus'
  get 'services', to: 'welcome#services'
  get 'recommendations', to: 'welcome#recommendations'
  get 'contactus', to: 'welcome#contactus'
  get 'nutritiontips', to: 'welcome#nutritiontips'
  get 'recipes', to: 'welcome#recipes'
  get 'wellnesscoaching', to: 'welcome#wellnesscoaching'
  root to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
