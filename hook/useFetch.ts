import { useState, useEffect } from "react";
import axios from "axios";

interface useFetchType {
  endpoint: string;
}

export interface JobData {
  id: string;
  role: string;
  company_name: string;
  company_num_employees?: string;
  employment_type: string;
  location: string;
  remote: boolean;
  logo: string;
  url: string;
  text: string;
  date_posted: string;
  keywords: [];
  source: string;
}

export const useFetch = ({ endpoint }: useFetchType) => {
  const [data, setData] = useState<JobData[]>([]);
  const [eachJobData, setEachJobData] = useState<JobData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const options = {
    method: "GET",
    url: `https://findwork.dev/api/jobs/${endpoint}`,
    headers: {
      Authorization: "Token 19751e0f873a4d143f79c4b227d42d9ded0a23bf",
    },
    renders: ["application/json", "text/html"],
    parses: ["application/json", "application/x-www-form-urlencoded", "multipart/form-data"],
    Vary: "Accept",
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.results);
      setEachJobData({
        id: response.data.id,
        company_name: response.data.company_name,
        date_posted: response.data.date_posted,
        employment_type: response.data.employment_type,
        keywords: response.data.keywords,
        location: response.data.location,
        logo: response.data.logo,
        remote: response.data.remote,
        role: response.data.role,
        source: response.data.source,
        text: response.data.text,
        url: response.data.url,
        company_num_employees: response.data.company_num_employees,
      });
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    eachJobData,
    isLoading,
    error,
    refetch,
  };
};
