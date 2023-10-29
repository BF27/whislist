import { SvelteKitAuth } from '@auth/sveltekit';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Tiktok from '@auth/core/providers/tiktok';
import {
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	SUPABASE_SERVICE_ROLE_KEY,
	TIKTOK_CLIENT_KEY,
	TIKTOK_CLIENT_SECRET
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
		}),
		Tiktok({
			clientId: TIKTOK_CLIENT_KEY,
			clientSecret: TIKTOK_CLIENT_SECRET,
			issuer: 'farkas.bence27@gmail.com'
		})
	],
	adapter: SupabaseAdapter({
		url: PUBLIC_SUPABASE_URL,
		secret: SUPABASE_SERVICE_ROLE_KEY
	})
});
