import { SvelteKitAuth } from '@auth/sveltekit';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import {
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	SUPABASE_SERVICE_ROLE_KEY,

} from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const handle = SvelteKitAuth({
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
		}),
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	],
	adapter: SupabaseAdapter({
		url: PUBLIC_SUPABASE_URL,
		secret: SUPABASE_SERVICE_ROLE_KEY
	})
});
