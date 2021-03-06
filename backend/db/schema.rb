# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20210611154438) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "burgerlikes", force: :cascade do |t|
    t.integer  "burger_id"
    t.integer  "likes"
    t.integer  "dislikes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "burgers", force: :cascade do |t|
    t.integer  "burger_API_id"
    t.integer  "restaurant_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "full_name"
    t.integer  "burger_id"
    t.string   "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favourites", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "burger_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "new_burgers", force: :cascade do |t|
    t.string   "name"
    t.string   "restaurant"
    t.integer  "restaurantID"
    t.string   "brand"
    t.string   "web"
    t.string   "image"
    t.string   "description"
    t.string   "ingredients"
    t.string   "optionals"
    t.boolean  "isVegetarian"
    t.integer  "addressID"
    t.string   "number"
    t.string   "line1"
    t.string   "line2"
    t.string   "postalCode"
    t.string   "country"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer  "burger_id"
    t.string   "like"
    t.string   "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "address"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
