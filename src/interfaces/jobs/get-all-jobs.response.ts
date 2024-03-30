export interface GetAllJobsResponse {
    jobs: Job[]
    nextPage: string
    prevPage: any
}

export interface Job {
    id: string;
    jobTitle: string;
    jobDescription: string;
    jobModality: string;
    createdAt: string;
    updatedAt: string;
    areaId: string;
    Area: Area;
    companyId: string;
    Company: Company;
    jobTags: string[];
    jobResponsabilities: string[];
    jobBenefits: string[];
    jobSkills: string[];
    jobMinSalary: number;
    jobMaxSalary: number;
    jobEducation: string;
    jobWorkLoad: string;
    jobLevel: string;
    jobLocation: string;
    jobYearsExp: string;
    jobVacancies: number;
}

export interface Area {
    nameArea: string;
}

export interface Company {
    nameCompany: string;
}