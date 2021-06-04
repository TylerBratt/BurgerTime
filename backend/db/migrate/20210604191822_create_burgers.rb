class CreateBurgers < ActiveRecord::Migration
  def change
    create_table :burgers do |t|
      t.integer :burger_API_id
      t.integer :restaurant_id

      t.timestamps null: false
    end
  end
end
