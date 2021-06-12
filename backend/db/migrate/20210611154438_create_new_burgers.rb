class CreateNewBurgers < ActiveRecord::Migration
  def change
    create_table :new_burgers do |t|
      
      t.string :name
      t.string :restaurant
      t.integer :restaurantID
      t.string :brand
      t.string :web
      t.string :image
      t.string :description
      t.string :ingredients
      t.string :optionals
      t.boolean :isVegetarian
      t.integer :addressID
      t.string :number
      t.string :line1
      t.string :line2
      t.string :postalCode
      t.string :country


      t.timestamps null: false

    end
    execute "ALTER SEQUENCE new_burgers_id_seq MINVALUE 1000 OWNED BY new_burgers.id START WITH 1000 RESTART 1000;"
  end
end
