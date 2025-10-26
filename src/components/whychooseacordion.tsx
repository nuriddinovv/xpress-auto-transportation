import { useState } from "react";
import { Box, Grid, Paper, Group, Text, rem } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faTruck,
  faSmile,
  faDollarSign,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    title: "RELIABILITY",
    desc: "We ensure your vehicle is handled safely and securely throughout the entire transport process.",
    icon: faShieldAlt,
  },
  {
    id: 2,
    title: "TIMELY DELIVERY",
    desc: "Our logistics team guarantees your vehicle will be delivered on schedule, every time.",
    icon: faTruck,
  },
  {
    id: 3,
    title: "CUSTOMER SATISFACTION",
    desc: "We keep you updated and make the whole process easy and transparent.",
    icon: faSmile,
  },
  {
    id: 4,
    title: "COMPETITIVE PRICING",
    desc: "We offer affordable rates with no hidden fees.",
    icon: faDollarSign,
  },
];

export const WhyChooseAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Box maw={1100} mx="auto" py={rem(48)} px={rem(16)}>
      <Grid gutter={24}>
        {items.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, md: 6 }}>
            <Paper
              withBorder
              radius="md"
              p="md"
              onClick={() => toggle(item.id)}
              style={{
                cursor: "pointer",
                backgroundColor: "#F9FAFB",
                transition: "0.2s",
              }}
            >
              <Group justify="space-between" wrap="nowrap">
                <Group wrap="nowrap">
                  <Box
                    style={{
                      backgroundColor: "#244567",
                      color: "#fff",
                      borderRadius: 12,
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </Box>

                  <Text fw={600} fz={18} style={{ lineHeight: 1.2 }}>
                    {item.title}
                  </Text>
                </Group>

                <Box
                  style={{
                    backgroundColor: "#E5E7EB",
                    borderRadius: 10,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#111827"
                    style={{
                      transform:
                        openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.2s",
                    }}
                  />
                </Box>
              </Group>

              {openId === item.id && (
                <Text mt="sm" fz={14} c="dimmed">
                  {item.desc}
                </Text>
              )}
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
