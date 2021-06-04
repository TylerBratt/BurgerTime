class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.integer :burger_id
      t.string :like
      t.string :comment
      t.timestamps null: false
    end
  end
end
