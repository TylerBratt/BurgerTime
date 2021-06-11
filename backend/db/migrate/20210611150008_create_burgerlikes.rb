class CreateBurgerlikes < ActiveRecord::Migration
  def change
    create_table :burgerlikes do |t|
      t.integer :burger_id
      t.integer :likes
      t.integer :dislikes

      t.timestamps null: false
    end
  end
end
