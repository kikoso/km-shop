import * as React from 'react';
import {useState} from 'react';
import PropTypes from "prop-types";
import {Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {
    AddCircleOutline,
    AddShoppingCartOutlined,
    CurrencyExchangeOutlined,
    LanguageOutlined,
    LocalShippingOutlined,
    RemoveCircleOutline,
    Star,
    WifiProtectedSetupOutlined
} from "@mui/icons-material";
import {ImageSizeBox} from "./ImageSizeBox";


export function ProductViewPage(props) {

    const {
        product
    } = props

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [urlImage, setUrlImage] = useState(product.image1);

    const collections = []

    product.collections.forEach((collection, index) => {
        collections.push((
            <Chip
                key={`collections-item-${index}`}
                size={'small'}
                label={collection}
                variant={'outlined'}
                color={'secondary'}
            />
        ));
    })

    return (
        <Grid container spacing={isSM ? 3 : 4}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                <Grid container spacing={1}>
                    <Grid item xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={12} min={12} null={12}>
                        <Stack direction={isSM ? 'row' : 'column'} spacing={0}>

                            <ImageButton
                                image={product.image1}
                                disabled={product.image1 === urlImage}
                                onClick={() => {
                                    setUrlImage(product.image1)
                                }}
                            />

                            <ImageButton
                                image={product.image2}
                                disabled={product.image2 === urlImage}
                                onClick={() => {
                                    setUrlImage(product.image2)
                                }}
                            />

                            <ImageButton
                                image={product.image3}
                                disabled={product.image3 === urlImage}
                                onClick={() => {
                                    setUrlImage(product.image3)
                                }}
                            />

                        </Stack>
                    </Grid>
                    <Grid item xl={10.5} lg={10.5} md={10.5} sm={10.5} xs={12} min={12} null={12}>
                        <ImageSizeBox url={urlImage}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>

                <Stack spacing={3}>
                    <Box sx={{
                        backgroundColor: '#F6F7F9',
                        p: isMD ? 1 : 2,
                        borderRadius: 2,
                    }}>
                        <Stack spacing={3} sx={{backgroundColor: 'white', borderRadius: 2, p: 2}}>

                            <Typography variant={isSM ? 'h4' : 'h3'}>
                                {product.name}
                            </Typography>

                            <Stack spacing={2} direction={'row'}>
                                <Chip
                                    size={'medium'}
                                    label={product.price}
                                    variant={'outlined'}
                                    color={'success'}
                                    sx={{
                                        marginTop: '1px',
                                        minWidth: 100,
                                        borderWidth: 2,
                                        fontWeight: 400,
                                        fontSize: 14
                                    }}
                                />

                                <Divider
                                    orientation="vertical"
                                    flexItem
                                />

                                <Stack direction={'row'} spacing={0.7} alignItems={'center'}>
                                    <Star sx={{width: 18, height: 18, color: '#FBBF23'}}/>
                                    <Typography variant="body2">
                                        4.0
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack direction={isMD ? 'column' : 'row'} spacing={2}>
                                <Stack
                                    spacing={0}
                                    direction={'row'}
                                    alignItems={'center'}
                                    sx={{
                                        pl: 1,
                                        pr: 1,
                                        borderRadius: 3,
                                        userSelect: 'none',
                                        backgroundColor: '#F6F7F9',
                                        width: 'fit-content',
                                        '& .MuiButtonBase-root': {
                                            p: 0.5,
                                            minWidth: 0,
                                            borderRadius: '50%'
                                        }
                                    }}
                                >
                                    <Button
                                        color={'warning'}
                                        onClick={() => {

                                        }}
                                    >
                                        <RemoveCircleOutline sx={{width: 32, height: 32}}/>
                                    </Button>

                                    <Typography variant={'h6'} sx={{
                                        fontSize: 18,
                                        paddingY: 0.5,
                                        paddingX: 1
                                    }}>
                                        12
                                    </Typography>

                                    <Button
                                        color={'warning'}
                                        onClick={() => {

                                        }}
                                    >
                                        <AddCircleOutline sx={{width: 32, height: 32}}/>
                                    </Button>
                                </Stack>

                                <Box sx={{width: '100%'}}>
                                    <Button
                                        fullWidth
                                        disableElevation
                                        variant={'contained'}
                                        color={'black'}
                                        startIcon={<AddShoppingCartOutlined/>}
                                        sx={{
                                            color: 'white',
                                            paddingY: 2,
                                            paddingX: 4,
                                        }}
                                        onClick={() => {
                                            console.log('Add to cart')
                                        }}
                                    >
                                        <Typography variant="h5">
                                            Add to cart
                                        </Typography>
                                    </Button>
                                </Box>
                            </Stack>

                            <Stack spacing={2}>

                                {collections.length > 0 ? (
                                    <>
                                        <Divider flexItem/>

                                        <Box sx={{
                                            position: 'relative',
                                            left: -8,
                                            '& .MuiChip-root': {
                                                marginLeft: 1,
                                                mt: 0.3,
                                                mb: 0.3,
                                            },
                                        }}>
                                            {collections}
                                        </Box>
                                    </>
                                ) : null}

                                <Divider flexItem/>

                                <Typography variant={isSM ? 'h6' : 'h5'}>
                                    Description
                                </Typography>

                                <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                                    fontWeight: 100,
                                }}>
                                    {product.description}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>

                    <Box>
                        <Grid container spacing={isMD ? 1 : 3}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                <Box sx={{
                                    backgroundColor: '#E3F2FD',
                                    p: 3,
                                    borderRadius: 2,
                                }}>
                                    <Stack spacing={1}>
                                        <LocalShippingOutlined/>

                                        <Stack spacing={0.5}>
                                            <Typography variant={'h6'}>
                                                Free shipping
                                            </Typography>
                                            <Typography variant={'caption'}>
                                                On orders over $50.00
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                <Box sx={{
                                    backgroundColor: '#eaf7f2',
                                    p: 3,
                                    borderRadius: 2,
                                }}>
                                    <Stack spacing={1}>
                                        <WifiProtectedSetupOutlined/>

                                        <Stack spacing={0.5}>
                                            <Typography variant={'h6'}>
                                                Very easy to return
                                            </Typography>
                                            <Typography variant={'caption'}>
                                                Just phone number.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                <Box sx={{
                                    backgroundColor: '#FEF2F2',
                                    p: 3,
                                    borderRadius: 2,
                                }}>
                                    <Stack spacing={1}>
                                        <LanguageOutlined/>

                                        <Stack spacing={0.5}>
                                            <Typography variant={'h6'}>
                                                Nationwide Delivery
                                            </Typography>
                                            <Typography variant={'caption'}>
                                                Fast delivery nationwide.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>

                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} min={12} null={12}>
                                <Box sx={{
                                    backgroundColor: '#FFFBEB',
                                    p: 3,
                                    borderRadius: 2,
                                }}>
                                    <Stack spacing={1}>
                                        <CurrencyExchangeOutlined/>

                                        <Stack spacing={0.5}>
                                            <Typography variant={'h6'}>
                                                Refunds policy
                                            </Typography>
                                            <Typography variant={'caption'}>
                                                60 days return for any reason
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>

            </Grid>
        </Grid>
    );
}

ProductViewPage.propTypes = {
    product: PropTypes.object.isRequired,
};

function ImageButton(props) {

    const {
        image,
        disabled,
        onClick,
    } = props

    return (
        <Button disabled={disabled} onClick={onClick} sx={{
            minWidth: 'auto',
            maxWidth: 80,
            '&.Mui-disabled:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.3,
                borderRadius: 1,
                backgroundColor: 'primary.main'
            }
        }}>
            <Avatar
                variant={'rounded'}
                src={image}
                sx={{
                    width: '100%',
                    height: 40,
                    borderRadius: 0.5
                }}
            />
        </Button>
    )
}