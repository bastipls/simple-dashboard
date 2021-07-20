
export const objectToJob = (job) =>{
   

    const json = { 
        client: job.client,
        // Esto lo hago ya que duplicando no es un objeto sino que solo un texto al cambiar dde opcion este se transforma 
        // en un string
        ...(job.id_hubspot && {id_hubspot: job.id_hubspot.hasOwnProperty('name') ? job.id_hubspot.name :job.id_hubspot }),
        more_details: job.more_details,
        position_name: job.position_name,
        experience: job.experience,
        ...(job.certifcations && {certifcations: job.certifcations}),
        vacancy_numbers:job.vacancy_numbers,
        ...(job.rent_limit && {rent_limit: job.rent_limit}),
        outdoor_search: job.outdoor_search,
        tenders:job.tenders,
        applicant_kam: job.applicant_kam,
        ...(job.type_service && {type_service: job.type_service}),
        type_contract: job.type_contract,
        ...(job.careers && {careers: job.careers}),
        industry_expirence: job.industry_expirence,
        ...(job.tecnologies && {tecnologies: job.tecnologies}),
        ...(job.skills && {skills:job.skills}),
        ...(job.behaivors && {behaivors: job.behaivors}),
        sector: job.sector,
        ...(job.currency && {currency: job.currency}),
        country: job.country,
        contract_duration:job.contract_duration,
        seniority: job.seniority,
    }

    return json
}