import React from 'react';

interface CompanyContextModel {
    company: string;
    setCompany: (company: string) => void;
};

export const CompanyContext = React.createContext<CompanyContextModel>({
    company: '',
    setCompany: (company: string) => {
        console.log('Warning! Did you forgot to add CompanyContext on top of your app?')
    },
});

export const CompanyProvider: React.FC = props => {
    const { children } = props;

    const [company, setCompany] = React.useState<string>('lemoncode')

    return (
        <CompanyContext.Provider value={{company, setCompany}}>
            {children}
        </CompanyContext.Provider>
    )
}
