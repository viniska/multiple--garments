import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import OrdersTable from './OrderTable';

const RecentOrders = () => {
    return (
        <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <br />
                    <Typography variant="h5">Recent Orders</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <Card sx={{ mt: 2 }} variant="outlined">
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        <OrdersTable />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default RecentOrders;
