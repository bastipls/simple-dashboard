export const objectToFormJob = (job) =>{

    if(Boolean(job) === false){
        return null
    }
 
    const json = { 
        applicant_kam: `[${job?.applicant_kam_id},"${job?.applicant_kam}"]`,
        behaivors: job.behaivors,
        careers: job.careers,
        certifcations: job?.certifcations,
        client: job?.client,
        contract_duration:job?.contract_duration.id,
        country: job?.country.id,
        currency: job?.currency.id,
        experience: job?.experience,
        id_hubspot: job?.id_hubspot,
        industry_expirence: job?.industry_expirence.id,
        more_details: job?.more_details,
        outdoor_search: job?.outdoor_search,
        tenders:job?.tenders,
        position_name: job?.position_name,
        rent_limit: job?.rent_limit,
        sector: job?.sector?.id,
        seniority: job?.seniority.id,
        skills:job.skills,
        tecnologies: job.tecnologies,
        type_contract: job?.type_contract.id,
        type_service: job?.type_service.id,
        vacancy_numbers:job?.vacancy_numbers,
        // Estos campos no se usan en los forms son para la interfas Observations
        id: job?.id,
        camunda_task:job?.camunda_task
    }
    return json
}