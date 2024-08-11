import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'


function AdminHeader() {

  const navigate = useNavigate()

  return <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/admin/activity")} color="inherit">Activity</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>
}

export default AdminHeader