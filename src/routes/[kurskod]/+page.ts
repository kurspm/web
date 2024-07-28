import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import KURSER from '$kurs/INDEX.json';

export const load: PageLoad = ({ params }) => {
	if (params.kurskod.match(/[A-Za-z]{2}[0-9]{4}/)) {

    let kod = params.kurskod.toLowerCase()

    let kurs;

    switch (kod) {
      case 'dd1366':
        kurs = import('$kurs/dd1366.svelte');
        break;
      case 'dd1351':
        kurs = import('$kurs/dd1351.svelte');
        break;
    }

		return {
			kurs: kurs,
      kod: kod,
      förkortning: KURSER[kod as keyof typeof KURSER].förkortning,
      namn: KURSER[kod as keyof typeof KURSER].namn,
		};
	}

	error(404, 'Not found');
};