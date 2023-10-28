import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import {
	GITHUB_ID,
	GITHUB_SECRET,
} from '$env/static/private';
import { EdgeDBAdapter } from "@auth/edgedb-adapter"
import { createClient } from "edgedb"

const client = createClient()

export const handle = SvelteKitAuth({
	adapter: EdgeDBAdapter(client),
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
		}),
	]
});
