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
import { Lock, LockOpen, AccountCircleSharp } from "@mui/icons-material";
import logo from "$assets/logo.svg";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "white",
        text: "black",
        height: "66px",
      }}
    >
      <Box
        sx={{
          width: "960px",
          marginX: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "40px", width: "120px" }}>
          <img
            src={logo}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <Link
            sx={{
              color: "black",
            }}
          >
            <Typography>Home</Typography>
          </Link>
          <Link
            sx={{
              color: "black",
            }}
          >
            <Typography>Products</Typography>
          </Link>
          <Link
            sx={{
              color: "black",
            }}
          >
            <AccountCircleSharp sx={{ width: "42px", height: "42px" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#E7E7E7",
        text: "#777777",
        paddingY: "32px",
      }}
    >
      <Box sx={{ width: "960px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography variant="caption">
            More ways to shop: Find a{" "}
            <a href="/">Hermon Holistic Health Hub </a>or other{" "}
            <a href="/">Hermon Distributor</a> near you. Or go to
            <a href="/">
              1556 Block 5 Corner Lot Sitio Pag asa, Anupul, Bamban, Tarlac.
              2317 Philippines.
            </a>
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid #413E39BF",
              padding: "0px",
              margin: "0px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption">
              Copyright © {new Date().getUTCFullYear()}
              <a href="/">Hermon Holistic Distribution Inc.</a> All rights
              reserved.
            </Typography>
            <Typography
              variant="caption"
              sx={{}}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "16px",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  sx={{ color: "#777777" }}
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Typography>|</Typography>
                <Link
                  sx={{ color: "#777777" }}
                  href="/legal"
                >
                  Legal
                </Link>
                <Typography>|</Typography>
                <Link
                  sx={{ color: "#777777" }}
                  href="/support"
                >
                  Support
                </Link>
                <Box sx={{ color: "#424245" }}>Philippines</Box>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function CheckoutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          paddingY: "128px",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
          maxWidth: "960px",
          marginX: "auto",
        }}
      >
        <Box>
          <Box sx={{ borderBottom: "1px solid black", paddingY: "16px" }}>
            <Typography variant="h4">Who you want to become?</Typography>
          </Box>
        </Box>

        <Box style={{ flexDirection: "row", display: "flex", gap: "16px" }}>
          <Card
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

      <Footer />
    </Box>
  );
}
