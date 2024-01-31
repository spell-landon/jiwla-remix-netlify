// Tesla
import stairs_1 from '~/media/tesla/stairs_1.jpg';
import stairs_2 from '~/media/tesla/stairs_2.jpg';
import stairs_3 from '~/media/tesla/stairs_3.jpg';
import stairs_4 from '~/media/tesla/stairs_4.jpg';
import stairs_5 from '~/media/tesla/stairs_5.jpg';
import tesla_1 from '~/media/tesla/tesla_1.jpg';
import tesla_2 from '~/media/tesla/tesla_2.jpg';
import tesla_3 from '~/media/tesla/tesla_3.jpg';
import tesla_4 from '~/media/tesla/tesla_4.jpg';
import tesla_5 from '~/media/tesla/tesla_5.jpg';
import tesla_6 from '~/media/tesla/tesla_6.jpg';
import tesla_7 from '~/media/tesla/tesla_7.jpg';
import tesla_8 from '~/media/tesla/tesla_8.jpg';
import tesla_9 from '~/media/tesla/tesla_9.jpg';
import tesla_10 from '~/media/tesla/tesla_10.jpg';
import tesla_11 from '~/media/tesla/tesla_11.jpg';
import tesla_12 from '~/media/tesla/tesla_12.jpg';
import tesla_13 from '~/media/tesla/tesla_13.jpg';
import tesla_14 from '~/media/tesla/tesla_14.jpg';
// Project A
import project_a_1 from '~/media/project_a/project_a_1.jpg';
import project_a_2 from '~/media/project_a/project_a_2.jpg';
import project_a_3 from '~/media/project_a/project_a_3.jpg';
import project_a_4 from '~/media/project_a/project_a_4.jpg';
import project_a_5 from '~/media/project_a/project_a_5.jpg';
// Project B
import project_b_1 from '~/media/project_b/project_b_1.jpg';
import project_b_2 from '~/media/project_b/project_b_2.jpg';
import project_b_3 from '~/media/project_b/project_b_3.jpg';
import project_b_4 from '~/media/project_b/project_b_4.jpg';
import project_b_5 from '~/media/project_b/project_b_5.jpg';
import project_b_6 from '~/media/project_b/project_b_6.jpg';
import project_b_7 from '~/media/project_b/project_b_7.jpg';
import project_b_8 from '~/media/project_b/project_b_8.jpg';
import project_b_9 from '~/media/project_b/project_b_9.jpg';
// Exterior
import tent_1 from '~/media/exterior/tent_1.jpg';
import tent_2 from '~/media/exterior/tent_2.jpg';
import tent_3 from '~/media/exterior/tent_3.jpg';
import tent_4 from '~/media/exterior/tent_4.jpg';
import railing from '~/media/exterior/railing.jpg';
import ladder_1 from '~/media/exterior/ladder_1.jpg';
import ladder_2 from '~/media/exterior/ladder_2.jpg';

export const COMPANY_INFO = {
  companyName: 'Journeyman Iron Works Inc',
  companyNameShort: 'JIWLA',
  slogan: 'Quality Retrofit, Erection and Fabrication',
  phoneNumber: '(909) 815-7934',
  emailAddress: 'dpara@jiwla.com',
  address: '2949 S.Vineyard Ave,</br>Ontario, CA 91761',
  addressUrl: 'https://maps.app.goo.gl/nhsy5EPGgmCFojTb9',
  license: {
    title: 'CSLB',
    number: '1065387',
  },
  employees: [
    {
      name: 'Daniel A Para',
      position: 'President',
    },
  ],
};

export const TESTIMONIAL_TEXT = `${COMPANY_INFO.companyName} brings architectural visions to life with unparalleled craftsmanship in iron works.`;

export type Project = {
  label: string;
  thumbnail: string;
  firstThree: string[];
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    label: 'Tesla',
    thumbnail: tesla_7,
    firstThree: [stairs_2, tesla_7, tesla_12],
    images: [
      tesla_1,
      tesla_2,
      tesla_3,
      tesla_4,
      tesla_5,
      tesla_6,
      tesla_7,
      tesla_8,
      tesla_9,
      tesla_10,
      tesla_11,
      tesla_12,
      tesla_13,
      tesla_14,
      stairs_1,
      stairs_2,
      stairs_3,
      stairs_4,
      stairs_5,
    ],
  },
  {
    label: 'Project A',
    thumbnail: project_a_5,
    firstThree: [project_a_2, project_a_4, project_a_5],
    images: [project_a_1, project_a_2, project_a_3, project_a_4, project_a_5],
  },
  {
    label: 'Project B',
    thumbnail: project_b_5,
    firstThree: [project_b_4, project_b_5, project_b_6],
    images: [
      project_b_1,
      project_b_2,
      project_b_3,
      project_b_4,
      project_b_5,
      project_b_6,
      project_b_7,
      project_b_8,
      project_b_9,
    ],
  },
  {
    label: 'Exterior',
    thumbnail: tent_2,
    firstThree: [ladder_2, railing, tent_4],
    images: [tent_1, tent_2, tent_3, tent_4, ladder_1, ladder_2, railing],
  },
];

const getAllImages = () => {
  let allImages: string[] = [];
  for (let i = 0; i < PROJECTS.length; i++) {
    allImages.push(...PROJECTS[i].firstThree);
  }

  return allImages;
};
export const ALL_PROJECT_IMAGES = getAllImages();
