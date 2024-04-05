## Setup
### Installing PHP 8.3
```
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3 php8.3-common php8.3-cli php8.3-{bz2,curl,mbstring,intl} php8.3-fpm php8.3-xml php8.3-sqlite3 libapache2-mod-php
```
## Seeding data
```
php artisan db:seed
```
## Running the server
```
php artisan serve
```
It should be running in [localhost:8000](http://localhost:8000)

To test it you may import [Insomnia's collection](../tiao-pardinho-api-collection.json) available on this repository's root folder
## Routes
### GET `/search`
Searches albums and tracks by their names. You will need to pass the `name` param for it to work properly.
### Example:
#### Request
```json
{
	"name": "rei"
}
```
#### Response
```json
{
	"albums": [
		{
			"id": 1,
			"name": "Rei do Gado",
			"year": 1961,
			"created_at": "2024-03-29T00:57:50.000000Z",
			"updated_at": "2024-03-29T00:57:50.000000Z"
		}
	],
	"tracks": [
		{
			"id": 4,
			"name": "Rei dos Canoeiros",
			"duration": 213,
			"album_id": 4,
			"created_at": "2024-03-29T00:59:20.000000Z",
			"updated_at": "2024-03-29T00:59:20.000000Z"
		}
	]
}
```
### GET `/tracks`
Lists all the tracks
### GET `/tracks/:id`
Shows the track with the id equals to `:id`
### POST `/tracks`
Creates a new track. It needs the `name` `duration` (in seconds) and `album_id` params to work properly.
### Example:
#### Request
```json
{
	"name": "Tchau Amor",
	"duration": 181,
	"album_id": 4
}
```
#### Response
```json
{
	"name": "Tchau Amor",
	"duration": 181,
	"album_id": 4,
	"updated_at": "2024-04-05T00:46:24.000000Z",
	"created_at": "2024-04-05T00:46:24.000000Z",
	"id": 5
}
```
### DELETE `/tracks/:id`
Deletes the track with the id equals to `:id`
### GET `/albums`
Lists all the albums
### GET `/albums/:id`
Shows the album with the id equals to `:id`
### POST `/albums`
Creates a new album. It needs the `name` and `year` params to work properly.
### Example:
#### Request
```json
{
	"name": "Viola Cabocla",
	"year": 2006
}
```
#### Response
```json
{
	"name": "Viola Cabocla",
	"year": 2006,
	"updated_at": "2024-03-29T01:57:15.000000Z",
	"created_at": "2024-03-29T01:57:15.000000Z",
	"id": 5
}
```
### DELETE `/albums/:id`
Deletes the album with the id equals to `:id`
