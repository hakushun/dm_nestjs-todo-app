import { Get, Controller, Render, Session } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	@Render('index')
	root(@Session() session: Record<string, any>) {
		session.visits = session.visits ? session.visits + 1 : 1;
		return { visits: session.visits };
	}
}
