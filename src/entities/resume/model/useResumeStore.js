import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const createItem = (data = {}) => ({ id: Date.now(), ...data });

export const useResumeStore = create(
    persist(
        (set, get) => ({
            experience: [
                createItem({
                    jobPosition: '',
                    company: '',
                    startTime: '',
                    endTime: '',
                    description: '',
                }),
            ],

            projects: [
                createItem({
                    name: '',
                    description: '',
                }),
            ],

            education: [
                createItem({
                    startYear: '',
                    finishYear: '',
                    speciality: '',
                    university: '',
                    faculty: '',
                }),
            ],
            contacts: {
                mail: '',
                number: '',
                telegram: '',
            },

            hardSkills: [createItem({ skill: '', level: 0 })],
            softSkills: [createItem({ skill: '' })],
            photo: '',
            mainInfo: {
                name: '',
                avocation: '',
                description: '',
                place: '',
            },

            setExperience: data => set({ experience: data }),
            setProjects: data => set({ projects: data }),
            setEducation: data => set({ education: data }),
            setHardSkills: data => set({ hardSkills: data }),
            setSoftSkills: data => set({ softSkills: data }),
            setPhoto: photo => set({ photo }),
            setMainInfo: info => set({ mainInfo: info }),
            setContacts: (key, value) =>
                set(state => ({
                    contacts: {
                        ...state.contacts,
                        [key]: value,
                    },
                })),

            addExperienceItem: () => {
                const prev = get().experience;
                set({
                    experience: [
                        ...prev,
                        createItem({
                            jobPosition: '',
                            company: '',
                            startTime: '',
                            endTime: '',
                            description: '',
                        }),
                    ],
                });
            },

            addProjectItem: () => {
                const prev = get().projects;
                set({
                    projects: [
                        ...prev,
                        createItem({ name: '', description: '' }),
                    ],
                });
            },

            addEducationItem: () => {
                const prev = get().education;
                set({
                    education: [
                        ...prev,
                        createItem({
                            startYear: '',
                            finishYear: '',
                            speciality: '',
                            university: '',
                            faculty: '',
                        }),
                    ],
                });
            },

            removeItemById: (key, id) => {
                const prev = get()[key];
                if (Array.isArray(prev) && prev.length > 1) {
                    set({ [key]: prev.filter(item => item.id !== id) });
                }
            },

            resetResume: () => {
                set({
                    experience: [
                        createItem({
                            jobPosition: '',
                            company: '',
                            startTime: '',
                            endTime: '',
                            description: '',
                        }),
                    ],
                    projects: [createItem({ name: '', description: '' })],
                    education: [
                        createItem({
                            startYear: '',
                            finishYear: '',
                            speciality: '',
                            university: '',
                            faculty: '',
                        }),
                    ],
                    hardSkills: [createItem({ skill: '' })],
                    softSkills: [createItem({ skill: '' })],
                    photo: '',
                    mainInfo: {
                        name: '',
                        avocation: '',
                        description: '',
                        place: '',
                    },
                });
            },
        }),
        {
            name: 'resume-storage', // ключ в localStorage
        },
    ),
);
