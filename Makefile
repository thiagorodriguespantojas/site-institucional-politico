# Makefile

up:
	docker-compose up --build

down:
	docker-compose down --remove-orphans

build:
	docker-compose build

start:
	docker-compose up -d

logs:
	docker-compose logs -f --tail=100

stop:
	docker-compose stop

prune:
	docker system prune -af --volumes

clean:
	docker-compose down --volumes --remove-orphans
	docker system prune -af --volumes

restart:
	make down
	make up
