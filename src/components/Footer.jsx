import React from "react";
import { Grid, Box, Typography, List, ListItem, Paper } from "@mui/material";

export default function Footer() {
    return (
        <Paper square sx={{ mt: 4, p: 3, pl:7, pr:10, borderTop: 1, borderColor: 'divider', backgroundColor:'quaternary.main', width: '100vw', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ fontFamily: 'Konthen', color:"side.main" }}>Open Campus 2026</Typography>
                <Typography variant="body2" sx={{ width: { xs: '100%' }, textAlign:'justify', color:"side.white" }}>
                    Open Campus 2026 mengangkat tema “Rooted in Care, Growing in Action” sebagai salah satu bentuk perwujudan nyata pertobatan ekologis. Melalui tema ini, siswa kelas X SMA Santa Ursula Jakarta diharapkan dapat mendalami nilai kepedulian yang kemudian mereka pegang teguh selama menempuh pendidikan mereka di SMA. Tidak hanya siswa kelas X, namun seluruh anggota komunitas SMA Santa Ursula Jakarta juga diajak untuk peduli terhadap sesamanya, dan mewujudkan kepedulian tersebut melalui aksi yang nyata. Setelah kegiatan ini, seluruh anggota komunitas SMA Santa Ursula Jakarta diharapkan dapat saling membantu dan melayani layaknya saudara.
                </Typography>
            </Grid>
            <Typography variant="caption" display="block" mt={2} sx={{ color: "side.main" }}>
                © {new Date().getFullYear()} BP OSIS SMA Santa Ursula Jakarta 2026/2027
            </Typography>
        </Paper>
    );
}