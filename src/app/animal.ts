import { FormlyFieldConfig } from "@ngx-formly/core";

export class Animal {
    name: string;
    latinName: string;
    description: string;
    extinct: boolean;
    population: number;

    getFormFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Naam van het dier',
                    placeholder: 'Keizerpinguin',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'Een dier heeft een naam nodig!'
                    }
                }
            },
            {
                key: 'latinName',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Latijnse naam van het dier',
                    placeholder: 'Aptenodytes forsteri',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'Een dier heeft een latijnse naam nodig!'
                    }
                }
            },
            {
                key: 'description',
                type: 'textarea',
                templateOptions: {
                    type: 'textarea',
                    label: 'Beschrijving van het dier',
                    placeholder: 'De keizerpinguin is de zwaarste en langste pinguinsoort die er bestaat.',
                    rows: 5,
                    required: true
                },
                validation: {
                    messages: {
                        required: 'Een dier heeft een beschrijving nodig!'
                    }
                }
            },
            {
                key: 'extinct',
                type: 'checkbox',
                defaultValue: false,
                templateOptions: {
                    type: 'checkbox',
                    label: 'Uitgestorven'
                },
            },
            {
                key: 'population',
                type: 'input',
                
                templateOptions: {
                    type: 'number',
                    label: 'Populatie',
                    placeholder: 10000,
                    required: true,
                    min: 0
                },
                validation: {
                    messages: {
                        required: 'Een dier heeft een populatie nodig!',
                        min: 'De populatie mag geen negatief getal zijn!'
                    }
                }
            }
        ]
    }
}