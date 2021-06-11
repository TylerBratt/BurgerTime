class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :full_name
      t.integer :burger_id
      t.string :comment

      t.timestamps null: false
    end
  end
end
