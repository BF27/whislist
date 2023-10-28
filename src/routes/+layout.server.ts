import type { LayoutServerLoad } from './$types.ts';

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession()
  };
};