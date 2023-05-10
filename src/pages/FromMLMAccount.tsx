import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Card, Link, Typography } from "@mui/material";
import { Lock, LockOpen, AccountCircleSharp } from "@mui/icons-material";
import logo from "$assets/logo.svg";
import { bottles } from "$assets";
import { useNavigate } from "react-router-dom";

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
              color: "#777777",
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

export function FromMLMAccountPage() {
  const navigate = useNavigate();

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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "128px",
          paddingY: "128px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1fr, 2)",
            gap: "64px",
            maxWidth: "960px",
            width: "100%",
            marginX: "auto",
          }}
        >
          <Box>
            <Box sx={{ borderBottom: "1px solid black", paddingY: "16px" }}>
              <Typography variant="h5">
                Do you want to join our reseller program
                <br />
                and enjoy exclusive benefits?
              </Typography>
            </Box>
          </Box>

          <Box style={{ flexDirection: "row", display: "flex", gap: "16px" }}>
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#E7E7E7",
                boxShadow: "none",
                color: "#A7A7A7",
                cursor: "pointer",
              }}
              onClick={() => navigate("/guest")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                  }}
                >
                  Continue as Guest
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "black",
                      }}
                    >
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
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #1B4965 0%, #BEE9E8 100%)",

                color: "white",
                width: "100%",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/reseller")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5">Become a Reseller</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
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
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(1fr, 2)",
            gap: "64px",
            maxWidth: "960px",
            marginX: "auto",
          }}
        >
          <Box>
            <Box sx={{ borderBottom: "1px solid black", paddingY: "16px" }}>
              <Typography variant="h5">
                Or choose your Hermon package!
              </Typography>
            </Box>
          </Box>

          <Box
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Card
              sx={{
                width: "100%",
                color: "white",
                gridColumn: "1 / 3",
                backgroundImage:
                  "linear-gradient(90deg, #1B4965 0%, #BEE9E8 100%)",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/legacy-package")}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "32px",
                    paddingY: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h5">Legacy Package</Typography>
                    <Typography variant="h6">40 Bottles</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <Typography variant="body1">
                        Get your own Hermon Webstore
                      </Typography>
                      <Typography variant="body1">
                        Start your own Direct Selling Business
                      </Typography>
                      <Typography variant="body1">
                        Enjoy doing business with Hermon
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <img
                  style={{
                    objectPosition: "center bottom",
                    objectFit: "contain",
                    width: "360px",
                    height: "260px",
                    paddingRight: "60px",
                  }}
                  alt="bottles"
                  src={bottles}
                />
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#E7E7E7",
                boxShadow: "none",
                color: "#777777",
                cursor: "pointer",
              }}
              onClick={() => navigate("/starter-package")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                    }}
                  >
                    Starter Package
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                    }}
                  >
                    2 Bottles
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography variant="body1">
                      Get your own Hermon Webstore
                    </Typography>
                    <Typography variant="body1">
                      Start your own Direct Selling Business
                    </Typography>
                    <Typography variant="body1">
                      Enjoy doing business with Hermon
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#E7E7E7",
                boxShadow: "none",
                color: "#777777",
                cursor: "pointer",
              }}
              onClick={() => navigate("/business-package")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                    }}
                  >
                    Business Package
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                    }}
                  >
                    6 Bottles
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography variant="body1">
                      Get your own Hermon Webstore
                    </Typography>
                    <Typography variant="body1">
                      Start your own Direct Selling Business
                    </Typography>
                    <Typography variant="body1">
                      Enjoy doing business with Hermon
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#777777",
                color: "white",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/premiere-package")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h5">Premiere Package</Typography>
                  <Typography variant="h6">12 Bottles</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography variant="body1">
                      Get your own Hermon Webstore
                    </Typography>
                    <Typography variant="body1">
                      Start your own Direct Selling Business
                    </Typography>
                    <Typography variant="body1">
                      Enjoy doing business with Hermon
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>

            <Card
              sx={{
                width: "100%",
                backgroundImage: "linear-gradient(-120deg, #8ECAE6, #d89b49)",
                color: "white",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/achievers-package")}
            >
              <Box
                sx={{
                  padding: "32px",
                  paddingY: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h5">Achievers Package</Typography>
                  <Typography variant="h6">20 Bottles</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Typography variant="body1">
                      Get your own Hermon Webstore
                    </Typography>
                    <Typography variant="body1">
                      Start your own Direct Selling Business
                    </Typography>
                    <Typography variant="body1">
                      Enjoy doing business with Hermon
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
