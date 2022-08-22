/** @type {import("@sveltejs/kit").RequestHandler} */
export const POST = async ({ request }) => {
	const { name, email, tel, message } = await request.json();

	const res = await fetch(
		`https://docs.google.com/forms/d/e/1FAIpQLSfkO629InpriJqMKWxdJQKCZbdmYPW-ur-2E1wKmL7D4XfvAw/formResponse?usp=pp_url&entry.427006970=${name}&entry.1900265048=${email}&entry.357049656=${tel}&entry.1265565465=${message}&submit=Submit`
	);

	if (res.ok) {
		return {
			status: res.status,
			body: {
				message: 'Success'
			}
		};
	} else {
		return {
			status: res.status,
			body: {
				message: 'Error'
			}
		};
	}
};
