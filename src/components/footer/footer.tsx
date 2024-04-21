import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          {/* <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                JEEasyBot
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Revolutionizing JEE Preparation.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid> */}
          <div
            className="visme_d"
            data-title="Untitled Project"
            data-url="dm0vjqxe-untitled-project"
            data-domain="forms"
            data-full-page="false"
            data-min-height="500px"
            data-form-id="58263"
          ></div>
          <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
          {/* <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
