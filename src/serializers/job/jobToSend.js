
export const jobToSend = (job) =>{


    const objectFormated ={
    
        applicant_kam:job.applicant_kam,
        behaivors:job.behaivors,
        careers:job.careers,
        certifcations:job.certifcations,
        client:job.client,
        contract_duration:job.contract_duration,
        country:job.country,
        currency:job.currency,
        experience:job.experience,
        id_hubspot:job.id_hubspot,
        industry_expirence:job.industry_expirence,
        more_details:job.more_details,
        outdoor_search:job.outdoor_search,
        position_name:job.position_name,
        rent_limit:job.rent_limit,
        sector:job.sector,
        seniority:job.seniority,
        skills:job.skills,
        tecnologies:job.tecnologies,
        type_contract:job.type_contract,
        type_service:job.type_service,
        vacancy_numbers:job.vacancy_numbers
    }
    return objectFormated
}