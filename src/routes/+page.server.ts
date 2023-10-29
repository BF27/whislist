import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.ts';
import { supabase } from '$lib/supabaseClient.js';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const { data} = await supabase.from('countries').select();
	if (!session?.user) throw redirect(303, '/login');
	return {
		//error: error ?? [],
		userData: data ?? []
	};
};
