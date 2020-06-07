HOST_IP := $(shell hostname -I | cut -d' ' -f1)

target: server_run web_run mobile_run

server_run: 
	xterm -e 'cd server/ && make run-postgres && npm run dev -- -a=$(HOST_IP)'

web_run:
	xterm -e 'cd web/ && npm start'

mobile_run:
	xterm -e 'cd mobile/ && sudo npm start'

