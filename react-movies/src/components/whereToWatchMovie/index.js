import React from 'react';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography";

const WhereToWatchMovie = ({ movieProviders }) => {
    const providers = movieProviders?.results?.IE;

    const baseUrl = "https://image.tmdb.org/t/p/w500"; 

    return (
        <>
            <Typography variant="h5" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                Where to Watch
            </Typography>
            
            <Paper component="ul" sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                    Stream
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {providers?.flatrate?.map((provider) => (
                        <li key={provider.provider_id} style={{ listStyle: 'none' }}>
                            <Chip
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {provider.logo_path && (
                                            <img
                                                src={`${baseUrl}${provider.logo_path}`}
                                                alt={provider.provider_name}
                                                style={{ width: 30, height: 30, marginRight: 8 }} 
                                            />
                                        )}
                                        {provider.provider_name}
                                    </div>
                                }
                                sx={{ margin: 1 }}
                            />
                        </li>
                    ))}
                </div>
            </Paper>
            
            <Paper component="ul" sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                    Rent
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {providers?.rent?.map((provider) => (
                        <li key={provider.provider_id} style={{ listStyle: 'none' }}>
                            <Chip
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {provider.logo_path && (
                                            <img
                                                src={`${baseUrl}${provider.logo_path}`}
                                                alt={provider.provider_name}
                                                style={{ width: 30, height:30, marginRight: 8 }} 
                                            />
                                        )}
                                        {provider.provider_name}
                                    </div>
                                }
                                sx={{ margin: 1 }}
                            />
                        </li>
                    ))}
                </div>
            </Paper>
            
            <Paper component="ul" sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" component="h3" style={{ textAlign: 'center', marginBottom: '1em' }}>
                    Buy
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {providers?.buy?.map((provider) => (
                        <li key={provider.provider_id} style={{ listStyle: 'none' }}>
                            <Chip
                                label={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {provider.logo_path && (
                                            <img
                                                src={`${baseUrl}${provider.logo_path}`}
                                                alt={provider.provider_name}
                                                style={{ width: 30, height: 30, marginRight: 8 }} 
                                            />
                                        )}
                                        {provider.provider_name}
                                    </div>
                                }
                                sx={{ margin: 1 }}
                            />
                        </li>
                    ))}
                </div>
            </Paper>
        </>
    );
};

export default WhereToWatchMovie;
