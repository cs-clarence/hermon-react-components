import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Breadcrumbs,
  Card,
  Link,
  Typography,
  Button,
} from "@mui/material";
import { Lock, LockOpen } from "@mui/icons-material";

export function CheckoutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "64px",
          maxWidth: "960px",
          marginX: "auto",
        }}
      >
        <Box>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
            >
              Plan
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Available Product
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Shipping Address
            </Link>
            <Typography color="text.primary">Payment</Typography>
          </Breadcrumbs>

          <Box sx={{ borderBottom: "1px solid black", paddingY: "16px" }}>
            <Typography variant="h4">Who you want to become?</Typography>
          </Box>
        </Box>

        <Box style={{ flexDirection: "row", display: "flex", gap: "16px" }}>
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "#E7E7E7",
            }}
          >
            <Box
              sx={{
                padding: "32px",
                paddingY: "96px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "400px",
              }}
            >
              <Typography variant="h4">Become a User</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Access and Purchase Hermon Products
                  </Typography>
                  <Typography variant="body1">
                    <Lock />
                    &nbsp; Hermon Account
                  </Typography>
                  <Typography variant="body1">
                    <Lock />
                    &nbsp; Get your own Hermon Webstore
                  </Typography>
                  <Typography variant="body1">
                    <Lock />
                    &nbsp; Start your own Direct Selling Business
                  </Typography>
                </Box>

                <Box sx={{ alignSelf: "end" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "9999px",
                      textTransform: "unset",
                      backgroundColor: "#777777",

                      minWidth: "120px",
                      "&:hover": {
                        backgroundColor: "#777777",
                      },
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(90deg, #1B4965 0%, #BEE9E8 100%)",

              color: "white",
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: "32px",
                paddingY: "96px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "400px",
              }}
            >
              <Typography variant="h4">Become a Reseller</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Access and Purchase Hermon Products
                  </Typography>
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Hermon Account
                  </Typography>
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Get your own Hermon Webstore
                  </Typography>
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Start your own Direct Selling Business
                  </Typography>
                  <Typography variant="body1">
                    <LockOpen />
                    &nbsp; Enjoy doing business with Hermon
                  </Typography>
                </Box>

                <Box sx={{ alignSelf: "end" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "9999px",
                      color: "black",
                      minWidth: "120px",
                      textTransform: "unset",
                      backgroundColor: "#F6BE4F",
                      "&:hover": {
                        backgroundColor: "#F6BE4F",
                      },
                    }}
                  >
                    I'm In!
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
