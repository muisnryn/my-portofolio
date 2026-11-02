export type Projects = {
    title: string;
    description: string;
    tags: string[];
    link: string;
    repo?: string;
};

export const projects: Projects[] = [
    {
        title:"Sistem Pendukungan Keputusan Pemilihan Konsultan Halal",
        description:"Sistem Pendukungan Keputusan Pemilihan Konsultan Halal menggunakan metode PROMETHEE II (Preference Ranking Organization Method for Enrichment Evaluations) berbasis web.",
        tags:["Laravel","PHP","MySQL","Bootstrap","JavaScript","PROMETHEE II","Tailwind CSS"],
        link:"-",
        repo:"https://github.com/muisnryn/sistem-konsultan-halal.git",
    },
    {
        title:"Sistem Informasi Desa Berbasis Web CMS (Content Management System)",
        description:"Sistem Informasi Desa Berbasis Web CMS (Content Management System) untuk mengelola informasi dan konten di desa.",
        tags:["Laravel","PHP","MySQL","Filament","JavaScript"],
        link:"-",
        repo:"https://github.com/muisnryn/DesaSukamaju-FIlament.git",
    },
];