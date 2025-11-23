export const fetchRemoteOKJobs = async () => {
  try {
    const response = await fetch('https://remoteok.com/api');
    const data = await response.json();
    return data.filter(job => job.id && job.position);
  } catch (error) {
    console.error('Error fetching RemoteOK jobs:', error);
    return [];
  }
};